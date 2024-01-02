(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {


        getProduct(id:number){
            console.log('Producto:', {id,name:"OLED TV"});
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService:ProductService
        private mailer: Mailer;
        private cart:CartBloc;

        constructor(productService: ProductService, mailer:Mailer,cart:CartBloc){
            this.productService = productService;
            this.mailer = mailer;
            this.cart = cart
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id)
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
           this.productService.saveProduct(product)
        }

        addtoCart(products:[]){
            this.cart.onAddToCart(products)
        }



        notifyClients(){
            this.mailer.sendEmail(["eduardo@google.com"],'to-clients');
        }
    

    }

    class CartBloc{
        private itemsincart: Object[] = []

        onAddToCart( products: number[] ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', products );
        }
    }
    
    class Mailer{
        sendEmail(emailList:string[],template:'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes',emailList,template);
        }
    
    }

    const productService = new ProductService()
    const mailer = new Mailer()
    const cartBloc = new CartBloc();
    const productBloc = new ProductBloc(productService,mailer,cartBloc);

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    mailer.sendEmail([],'to-clients');
    cartBloc.onAddToCart([1,2,3,4,5,6,7,8,9,10]);
})
