import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotoPage from "./pages/PhotoPage";
import FireworksDisplayPage from "./pages/FireworksDisplayPage";
import MapPage from "./pages/MapPage";
import QRPage from "./pages/QRPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DesignPage from "./pages/DesignPage";
import ErrorPage from "./pages/ErrorPage";

export default function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/"/>
                    <Route path="/:boothId/create-firework" element={<DesignPage/>}/>
                    <Route path="/:boothId/capture-firework" element={<PhotoPage/>}/>
                    <Route path="/:boothId/show-fireworks" element={<FireworksDisplayPage/>}/>
                    <Route path="/:boothId/map" element={<MapPage/>}/>
                    <Route path="/:boothId/scan-qr" element={<QRPage/>}/>
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer
                draggable
                closeOnClick
                theme="colored"
            />
        </>
    )
}
