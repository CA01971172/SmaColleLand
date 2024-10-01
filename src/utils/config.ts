import image1_1 from "./../images/河原電子ビジネス専門学校/1.png";
import image1_2 from "./../images/河原電子ビジネス専門学校/2.png";
import image1_3 from "./../images/河原電子ビジネス専門学校/3.png";
import image2_1 from "./../images/河原外語観光・製菓専門学校/1.png";
import image2_2 from "./../images/河原外語観光・製菓専門学校/2.png";
import image2_3 from "./../images/河原外語観光・製菓専門学校/3.png";
import image3_1 from "./../images/大原簿記公務員専門学校 愛媛校/1.png";
import image3_2 from "./../images/大原簿記公務員専門学校 愛媛校/2.png";
import image3_3 from "./../images/大原簿記公務員専門学校 愛媛校/3.png";
import openCampus1 from "./../images/オープンキャンパス/20240720OC_line-300x195.jpg";
import openCampus2 from "./../images/オープンキャンパス/20240727OC_line-300x195.jpg";
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
    "HF5W2T": {
        schoolName: "河原電子ビジネス専門学校",
        color: "#00FFFF",
        fireworksImages: [image1_1, image1_2, image1_3],
        mapData: {
            pinX: 46,
            pinY: 19,
            schoolNameX: 12,
            schoolNameY: 26,
            schoolNameWidth: 52,
            writingMode: "horizontal-tb",
            pinImageSrc: ""
        }
    },
    "Y6XBJH": {
        schoolName: "河原外語観光・製菓専門学校",
        color: "#4800FF",
        fireworksImages: [image2_1, image2_2, image2_3],
        mapData: {
            pinX: 3,
            pinY: 5,
            schoolNameX: 5,
            schoolNameY: 5,
            schoolNameWidth: 25,
            writingMode: "horizontal-tb",
            pinImageSrc: ""
        }
    },
    "7JDZVP": {
        schoolName: "大原簿記公務員専門学校 愛媛校",
        color: "#FF0000",
        fireworksImages: [image3_1, image3_2, image3_3],
        mapData: {
            pinX: 40,
            pinY: 5,
            schoolNameX: 35,
            schoolNameY: 5,
            schoolNameWidth: 26,
            writingMode: "horizontal-tb",
            pinImageSrc: ""
        }
    }
};

// ブースIDのリスト
export const BOOTH_ID_LIST: string[] = Object.keys(SCHOOL_DATA);

export const LOTTERY_EVENTS: string[] = [
    "7/13(土) 14:00～",
    "7/14(日) 14:00～"
]

export const OPEN_CAMPUS_DATE: OpenCampusInfo[] = [
    {
        url: "https://kbc.kawahara.ac.jp/oc_event/20240720/",
        // title: "7/20(土)夏フェスオープンキャンパス",
        title: "7/20(土)",
        imageSrc: openCampus1
    },
    {
        url: "https://kbc.kawahara.ac.jp/oc_event/20240720/",
        // title: "7/27(土)夏フェスオープンキャンパス",
        title: "7/27(土)",
        imageSrc: openCampus2
    }
];
