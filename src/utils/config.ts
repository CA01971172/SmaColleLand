import image1_1 from "./../images/河原電子ビジネス専門学校/1.png";
import image1_2 from "./../images/河原電子ビジネス専門学校/2.png";
import image1_3 from "./../images/河原電子ビジネス専門学校/3.png";
import image2_1 from "./../images/河原外語観光・製菓専門学校/1.png";
import image2_2 from "./../images/河原外語観光・製菓専門学校/2.png";
import image2_3 from "./../images/河原外語観光・製菓専門学校/3.png";
import image3_1 from "./../images/大原簿記公務員専門学校 愛媛校/1.png";
import image3_2 from "./../images/大原簿記公務員専門学校 愛媛校/2.png";
import image3_3 from "./../images/大原簿記公務員専門学校 愛媛校/3.png";
import image4_1 from "./../images/河原アイペットワールド専門学校/1.png";
import image4_2 from "./../images/河原アイペットワールド専門学校/2.png";
import image4_3 from "./../images/河原アイペットワールド専門学校/3.png";
import image5_1 from "./../images/河原医療大学校/1.png";
import image5_2 from "./../images/河原医療大学校/2.png";
import image5_3 from "./../images/河原医療大学校/3.png";
import image6_1 from "./../images/河原医療福祉専門学校/1.png";
import image6_2 from "./../images/河原医療福祉専門学校/2.png";
import image6_3 from "./../images/河原医療福祉専門学校/3.png";
import image7_1 from "./../images/河原ビューティーモード専門学校/1.png";
import image7_2 from "./../images/河原ビューティーモード専門学校/2.png";
import image7_3 from "./../images/河原ビューティーモード専門学校/3.png";
import image8_1 from "./../images/河原デザイン・アート専門学校/1.png";
import image8_2 from "./../images/河原デザイン・アート専門学校/2.png";
import image8_3 from "./../images/河原デザイン・アート専門学校/3.png";
import image9_1 from "./../images/松山デザイナー専門学校/1.png";
import image9_2 from "./../images/松山デザイナー専門学校/2.png";
import image9_3 from "./../images/松山デザイナー専門学校/3.png";
import image10_1 from "./../images/河原医療大学校 新居浜校/1.png";
import image10_2 from "./../images/河原医療大学校 新居浜校/2.png";
import image10_3 from "./../images/河原医療大学校 新居浜校/3.png";
import pin_image_denshi from "./../images/マップピン/河原電子ビジネスマップピン.png";
import pin_image_gaigoseika from "./../images/マップピン/河原外語・製菓マップピン.png";
import pin_image_ooharaboki from "./../images/マップピン/大原簿記公務員マップピン.png";
import pin_image_aipetto from "./../images/マップピン/河原アイペットワールドマップピン.png";
import pin_image_iryou from "./../images/マップピン/河原医療大学校マップピン.png";
import pin_image_iryouhukushi from "./../images/マップピン/河原医療福祉マップピン.png";
import pin_image_beauti from "./../images/マップピン/河原ビューティ.png";
import pin_image_design from "./../images/マップピン/河原デザイン・アートマップピン.png";
import pin_image_matsuyamadesigner from "./../images/マップピン/松山デザイナーマップピン.png";
import pin_image_iryou_niihama from "./../images/マップピン/河原医療大学校新居浜校マップピン.png"
import kawahara from "./../images/kawahara.png";
import openCampus1 from "./../images/オープンキャンパス/20240720OC_line-300x195.jpg";
import openCampus2 from "./../images/オープンキャンパス/20240727OC_line-300x195.jpg";

type SchoolInfo = {
    schoolName: string; // 学校名
    color: string; // 学校のテーマカラー(カラーコード)
    fireworksImages: {0: string, 1: string, 2: string}; // 花火の画像
    positionPinX: number; //マップのピン横軸 単位は%
    positionPinY: number; //マップのピン縦軸 単位は%
    schoolNameX: number; //表示される学校名の縦軸 単位は%
    schoolNameY: number; //表示される学校名の横軸 単位は%
    schoolNameWidth: number; //表示される学校名の文字サイズ 単位はvw
    mapPin: string;
}

export type OpenCampusInfo = {
    url: string; // オープンキャンパスのurl
    title: string; // イベント名
    imageSrc: string; // イメージ画像のパス
};

// サンプル花火データ
export const SAMPLE_DATA = {
    color: "#FFFFFF",
    imageSrc: kawahara
}

// 各学校の設定データ
export const SCHOOL_DATA: { [boothId: string]: SchoolInfo } = {
    "HF5W2T": {
        schoolName: "河原電子ビジネス専門学校",
        color: "#00FFFF",
        fireworksImages: [image1_1, image1_2, image1_3],
        positionPinX: 29,
        positionPinY: 18,
        schoolNameX: 12,
        schoolNameY: 26,
        schoolNameWidth: 52,
        mapPin: pin_image_denshi
    },
    "Y6XBJH": {
        schoolName: "河原外語観光・製菓専門学校",
        color: "#4800FF",
        fireworksImages: [image2_1, image2_2, image2_3],
        positionPinX: 7,
        positionPinY: 2,
        schoolNameX: 5,
        schoolNameY: 5,
        schoolNameWidth: 25,
        mapPin: pin_image_gaigoseika
    },
    "7JDZVP": {
        schoolName: "大原簿記公務員専門学校 愛媛校",
        color: "#FF0000",
        fireworksImages: [image3_1, image3_2, image3_3],
        positionPinX: 41,
        positionPinY: 2,
        schoolNameX: 35,
        schoolNameY: 5,
        schoolNameWidth: 26,
        mapPin: pin_image_ooharaboki
    },
    "SHSQ4A": {
        schoolName: "河原アイペットワールド専門学校",
        color: "#FFA500",
        fireworksImages: [image4_1, image4_2, image4_3],
        positionPinX: 80,
        positionPinY: 0,
        schoolNameX: 87,
        schoolNameY: 8,
        schoolNameWidth: 10,
        mapPin: pin_image_aipetto
    },
    "FZVSW0": {
        schoolName: "河原医療大学校",
        color: "#00FF00",
        fireworksImages: [image5_1, image5_2, image5_3],
        positionPinX: 50,
        positionPinY: 31.5,
        schoolNameX: 25,
        schoolNameY: 34,
        schoolNameWidth: 26,
        mapPin: pin_image_iryou
    },
    "WA067Z": {
        schoolName: "河原医療福祉専門学校",
        color: "#CDFF00",
        fireworksImages: [image6_1, image6_2, image6_3],
        positionPinX: 22,
        positionPinY: 47,
        schoolNameX: 12.5,
        schoolNameY: 52.5,
        schoolNameWidth: 35,
        mapPin: pin_image_iryouhukushi
    },
    "94VPFZ": {
        schoolName: "河原ビューティモード専門学校",
        color: "#FF00FF",
        fireworksImages: [image7_1, image7_2, image7_3],
        positionPinX: 5,
        positionPinY: 0,
        schoolNameX: 0,
        schoolNameY: 0,
        schoolNameWidth: 0,
        mapPin: pin_image_beauti
    },
    "5HGS6W": {
        schoolName: "河原デザイン・アート専門学校",
        color: "#FFFF00",
        fireworksImages: [image8_1, image8_2, image8_3],
        positionPinX: 5,
        positionPinY: 0,
        schoolNameX: 0,
        schoolNameY: 0,
        schoolNameWidth: 0,
        mapPin: pin_image_design
    },
    "HDE5W4": {
        schoolName: "松山デザイナー専門学校",
        color: "#0000FF",
        fireworksImages: [image9_1, image9_2, image9_3],
        positionPinX: 5,
        positionPinY: 0,
        schoolNameX: 0,
        schoolNameY: 0,
        schoolNameWidth: 0,
        mapPin: pin_image_matsuyamadesigner
    },
    "Y9KFFH": {
        schoolName: "河原医療大学校 新居浜校",
        color: "#00FFAC",
        fireworksImages: [image10_1, image10_2, image10_3],
        positionPinX: 5,
        positionPinY: 0,
        schoolNameX: 55,
        schoolNameY: 50,
        schoolNameWidth: 26,
        mapPin: pin_image_iryou_niihama
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
