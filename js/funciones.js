const inst = Vue.createApp({
    el: "#contenedor",
    mounted() {
      console.log('Instancia montada')
    
    },
    created(){
        this.cargarMuebles()
    },

    
    data(){
        return{
          muebles:[],
        
        }
    },
   methods:{
    cargarMuebles() {
        axios.get("https://www.course-api.com/react-store-products")
            .then((respuesta) => {
                this.muebles = respuesta.data; // La API devuelve un arreglo directamente
                console.log(this.muebles);
            })
        },
    

    

 }

} 
        


);
const app = inst.mount("#contenedor")
