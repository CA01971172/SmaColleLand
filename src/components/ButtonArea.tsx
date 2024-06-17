import { useContext, useEffect } from "react";
import { CameraContext } from "./../providers/CameraProvider";
import DoubleCircleIcon from "./DoubleCircleIcon";
import { Theme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CachedIcon from '@mui/icons-material/Cached';
import CameraRear from '@mui/icons-material/CameraRear';
import CameraFront from '@mui/icons-material/CameraFront';
import Cameraswitch from '@mui/icons-material/Cameraswitch';
import { ICON_SIZE, ICON_COLOR, BUTTON_MARGIN } from "./../pages/PhotoPage";
import { FireworksContext } from "../providers/FireworkProvider";
import { DataContext } from "../providers/DataProvider";
import { CaptureContext } from "../providers/CaptureProvider";
import { ModalContext } from "../providers/ModalProvider";

// ボタン類のコンポーネント
export default function ButtonArea({theme}: {theme: Theme}){
    /* useState等 */
    // アウトカメラ/インカメラを切り替えるためのcontext
    const {
        videoRef,
        switchCameraFacing,
        cameraFacing,
        enableBothCamera
    } = useContext(CameraContext);

    // 画面幅がmd以上かどうか
    const isMdScreen = useMediaQuery(() => theme.breakpoints.up("md")); // md以上

    // 花火データを操作するためのcontext
    const {
        initializeImageSrc,
        toggleFireworksPosition,
        fireworkPhase,
        setFireworkPhase,
        fireworkAnimationFrameId,
        sparksAnimationFrameId
    } = useContext(FireworksContext);

    // 写真撮影を行うためのcontext
    const {
        isTakingPhoto,
        mergeCanvas
    } = useContext(CaptureContext);

    // モーダルメニュー用のcontext
    const {
        openModal
    } = useContext(ModalContext);

    // ブースIDを取得するためのcontext
    const {
        boothId
    } = useContext(DataContext);


    /* 関数定義 */
    // 撮影ボタンを押したときの処理
    function handleTakePhotoButton(){
        // 既に撮影ボタンの処理が走っているなら、処理を中止する
        if(isTakingPhoto.current){
            console.error("既に撮影ボタンが押されています");
            return;
        };

        isTakingPhoto.current = true; // 撮影ボタンの処理中であることを記録する
        videoRef.current?.pause(); // カメラを一時停止する

        setFireworkPhase(1); // 花火の打ち上げアニメーションを開始する
        // 花火の爆発アニメーションは別の箇所で行う
        // 花火の撮影処理は別の箇所で行う
    }

    // 撮影写真の確認処理を行う関数
    function confirmTakePhoto(){
        mergeCanvas(); // 撮影写真を取得する
        openModal(); // 撮影写真確認用モーダルメニューを開く
    }


    /* useEffect */
    // boothIdが読み込めたら、画像データを読み込む
    useEffect(() => {
        if(boothId) initializeImageSrc();
    }, [boothId]);

    // 花火の爆発が終了したら、撮影写真の確認処理を行う
    useEffect(() => {
        if(fireworkPhase !== 3) return; // 撮影待機状態でなければ処理を中止
        if(fireworkAnimationFrameId !== null) return; // 花火の爆発アニメーションが終了していなければ処理を中止
        if(sparksAnimationFrameId !== null) return; // 火花の爆発アニメーションが終了していなければ処理を中止

        confirmTakePhoto(); // 撮影写真の確認処理を行う
    }, [fireworkPhase, fireworkAnimationFrameId, sparksAnimationFrameId]);


    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: isMdScreen ? "center" : "space-evenly",
                position: "absolute",
                bottom: "1rem",
                zIndex: "10"
            }}
        >
            <IconButton
                style={{
                    margin: isMdScreen ?`0 ${BUTTON_MARGIN}` : "0"
                }}
                aria-label="reset-view"
                color="primary"
                onClick={() =>{
                    if(isTakingPhoto.current) return; // 撮影ボタンの処理中なら、処理をやめる
                    toggleFireworksPosition();
                }}
            >
                <CachedIcon
                    style={{
                        width: ICON_SIZE,
                        height: ICON_SIZE
                    }}
                />
            </IconButton>
            <IconButton
                style={{
                    margin: isMdScreen ?`0 ${BUTTON_MARGIN}` : "0"
                }}
                aria-label="capture-display"
                color="primary"
                onClick={handleTakePhotoButton}
            >
                <DoubleCircleIcon
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    color={ICON_COLOR}
                />
            </IconButton>
            <IconButton
                style={{
                    margin: isMdScreen ?`0 ${BUTTON_MARGIN}` : "0"
                }}
                aria-label="switch-camera"
                color="primary"
                disabled={!enableBothCamera}
                onClick={() => {
                    switchCameraFacing(!isTakingPhoto.current);
                }}
            >
                {(cameraFacing === "out") ? (
                    <CameraFront
                        style={{
                            width: ICON_SIZE,
                            height: ICON_SIZE
                        }}
                    />
                ): ((cameraFacing === "in") ? (
                    <CameraRear
                        style={{
                            width: ICON_SIZE,
                            height: ICON_SIZE
                        }}
                    />
                ): (
                    <Cameraswitch
                        style={{
                            width: ICON_SIZE,
                            height: ICON_SIZE
                        }}
                    />
                ))}
            </IconButton>
        </div>
    );
};
