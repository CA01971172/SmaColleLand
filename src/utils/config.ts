import image1_1 from "./../images/花火素材/ポイントA喜怒哀楽　うれしい.png";
import image1_2 from "./../images/花火素材/ポイントA恐竜アイコン.png";
import image1_3 from "./../images/花火素材/ポイントA星の無料素材7.png";
import image2_1 from "./../images/花火素材/ポイントBゴーストアイコン1.png";
import image2_2 from "./../images/花火素材/ポイントBジャックオーランタンの無料アイコン.png";
import image2_3 from "./../images/花火素材/ポイントB蝙蝠の無料アイコン.png";
import image3_1 from "./../images/花火素材/ポイントCU.F.Oのアイコン.png";
import image3_2 from "./../images/花火素材/ポイントC土星、木星のアイコン.png";
import image3_3 from "./../images/花火素材/ポイントC火星人アイコン3.png";
import pinA from "./../images/マップピン/PointA.png"
import pinB from "./../images/マップピン/PointB.png"
import pinC from "./../images/マップピン/PointC.png"
import { SchoolInfo } from "./types";

export type OpenCampusInfo = {
    url: string; // オープンキャンパスのurl
    title: string; // イベント名
    imageSrc: string; // イメージ画像のパス
};

// サンプル花火データ
export const SAMPLE_DATA = {
    color: "#FFFFFF",
    imageSrc: ""
}

// 各学校の設定データ
export const SCHOOL_DATA: { [boothId: string]: SchoolInfo } = {
    "X6aTFZMty": {
        schoolName: "ポイントA",
        color: "#00ff05",
        fireworksImages: [image1_1, image1_2, image1_3],
        mapData: {
            pinX: 46,
            pinY: 19,
            schoolNameX: 12,
            schoolNameY: 26,
            schoolNameWidth: 52,
            writingMode: "horizontal-tb",
            pinImageSrc: pinA
        }
    },
    "bP-EczfZL": {
        schoolName: "ポイントB",
        color: "#A456DF",
        fireworksImages: [image2_1, image2_2, image2_3],
        mapData: {
            pinX: 3,
            pinY: 5,
            schoolNameX: 5,
            schoolNameY: 5,
            schoolNameWidth: 25,
            writingMode: "horizontal-tb",
            pinImageSrc: pinB
        }
    },
    "jCzJmypt5": {
        schoolName: "ポイントC",
        color: "#3aabd2",
        fireworksImages: [image3_1, image3_2, image3_3],
        mapData: {
            pinX: 40,
            pinY: 5,
            schoolNameX: 35,
            schoolNameY: 5,
            schoolNameWidth: 26,
            writingMode: "horizontal-tb",
            pinImageSrc: pinC
        }
    }
};

// ブースIDのリスト
export const BOOTH_ID_LIST: string[] = Object.keys(SCHOOL_DATA);
