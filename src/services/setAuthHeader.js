import axios from "axios";


const setAuthHeader = (token) => {
    if(token) {
        axios.defaults.headers={
            Authorization: 'Bearer' + token,
        };
    } 
    else {
        delete axios.defaults.headers.Authorization;
    }
};
export default setAuthHeader;


  /*  constructor() {
        super();
        this.state = { encheres: [], loading: true};
    }
    componentDidMount() {
        this.getEncheres();
        console.log("tessss")
    }
  async getEncheres() {       
      console.log("first")   
    try {
//console

        const token=JSON.parse(localStorage.getItem('user-info').token)

            console.log("getEncheres token",token)
        const encheres =await Api.get(`/users`, {headers: {
            Authorization: 'Bearer ' + token  
          }})
            console.log(
                'enchress',encheres
            )
        this.setState({ encheres: encheres.data, loading: false})
     
        } catch (error) {
            // alert("test")
        }
*/