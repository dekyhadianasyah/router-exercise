import { useState , useEffect} from "react"
import { Redirect } from "react-router-dom"
import axios from 'axios'
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'; 

export default () =>
{
    const [products,setProducts] = useState([])

    const [chartProducts,setChartProducts] = useState([])

    if (!localStorage.getItem('auth')){
        return <Redirect to="/login"/>
    }

     useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
    },[])

    const addNewChart = (product) =>{
        var data = {
            product : product, counter : 1
        }
        setChartProducts([...chartProducts,data])
    }
    const onAddChart = (product) =>{
        //console.log(product)
        debugger
        if (chartProducts.length == 0)
        {
            // var data = {
            //     product : product, counter : 1
            // }
            // setChartProducts([data])
            addNewChart(product)
        }
        else
        {
            let isExist = false;

            var newChart = chartProducts?.map((chart) => {
            
                if(chart.product.id === product.id)
                {
                    isExist = true;
                    var counter = chart.counter + 1;
    
                    return {
                        ...chart,                   
                        counter: counter
                    }
                }
                else{
                    return chart;
                }
            })

            setChartProducts(newChart)
            if (!isExist)
            {
                //setChartProducts([...chartProducts, {products: product, counter: 1}])
                addNewChart(product)
            }
        }      

 

    }
    return (

        <>
            <h1>
                Chart Page
            </h1>
            <div>
                {chartProducts?.map((chart) =>     
                    <div key={chart.product.id}>              
                        <div>
                            Product : {chart.product.title}
                        </div>
                        <div>
                            Price : {chart.product.price}
                        </div>
                        <div>
                            Counter : {chart.counter}
                        </div>     
                    </div>             
                )}
            </div>
            <div>
            <MDBContainer>
                {products?.map((product) =>                   
                        <MDBRow>
                            <MDBCol size='5' className='col-example'>
                                <img src={product.image} style={{width: 200, height: 150 }}></img>
                            </MDBCol>
                            <MDBCol className='col-example'>
                                {product.title}
                            </MDBCol>
                            <MDBCol  className='col-example'>
                                <MDBBtn color='primary' onClick={() => onAddChart(product)}>Add to Chart</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                   

                    // <div key={product.id} className="col-sm-3">
                    //     <div className="row">
                    //         <div>
                    //             <img src={product.image} style={{width: 200, height: 150 }}></img>
                    //         </div>
                    //         <div>
                    //            {product.title}
                    //         </div>
                    //         <div>
                    //             <MDBBtn color='primary' onClick={() => onAddChart(product)}>Add to Chart</MDBBtn>
                              
                    //         </div>
                    //     </div>
                    // </div>
                )}
            </MDBContainer>
            </div>
        </>
    )
}