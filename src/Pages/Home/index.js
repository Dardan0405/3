import React,{lazy,Suspense} from "react";
import Loading from "../../Components/Shared/Loading/Loading";
const Lazyloaded= lazy =(()=> import('./Home'));
const Home =() =>{
    return(
        <Suspense fallback={<Loading/>}>
            <Lazyloaded/>
        </Suspense>
    )
}
