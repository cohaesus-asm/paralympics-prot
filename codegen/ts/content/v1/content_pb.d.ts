// package: paralympics.content.v1
// file: content/v1/content.proto

import * as jspb from "google-protobuf";

export class ContentModule extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  getType(): TypeMap[keyof TypeMap];
  setType(value: TypeMap[keyof TypeMap]): void;

  getText(): string;
  setText(value: string): void;

  getTextHtml(): string;
  setTextHtml(value: string): void;

  getChapterHeading(): string;
  setChapterHeading(value: string): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Image | undefined;
  setImage(value?: Image): void;

  getImageAlt(): string;
  setImageAlt(value: string): void;

  getImageCaption(): string;
  setImageCaption(value: string): void;

  getImageFullScreen(): boolean;
  setImageFullScreen(value: boolean): void;

  getQuoteText(): string;
  setQuoteText(value: string): void;

  getQuoteAuthor(): string;
  setQuoteAuthor(value: string): void;

  getHighlightText(): string;
  setHighlightText(value: string): void;

  getVideoUrl(): string;
  setVideoUrl(value: string): void;

  getVideoCaption(): string;
  setVideoCaption(value: string): void;

  hasVideoCover(): boolean;
  clearVideoCover(): void;
  getVideoCover(): Image | undefined;
  setVideoCover(value?: Image): void;

  getVideoTitle(): string;
  setVideoTitle(value: string): void;

  getDropdownTitle(): string;
  setDropdownTitle(value: string): void;

  getAchievementGame(): string;
  setAchievementGame(value: string): void;

  getAchievementGold(): number;
  setAchievementGold(value: number): void;

  getAchievementSilver(): number;
  setAchievementSilver(value: number): void;

  getAchievementBronze(): number;
  setAchievementBronze(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getSubTitle(): string;
  setSubTitle(value: string): void;

  getLink(): string;
  setLink(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentModule.AsObject;
  static toObject(includeInstance: boolean, msg: ContentModule): ContentModule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentModule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentModule;
  static deserializeBinaryFromReader(message: ContentModule, reader: jspb.BinaryReader): ContentModule;
}

export namespace ContentModule {
  export type AsObject = {
    id: string,
    order: number,
    type: TypeMap[keyof TypeMap],
    text: string,
    textHtml: string,
    chapterHeading: string,
    image?: Image.AsObject,
    imageAlt: string,
    imageCaption: string,
    imageFullScreen: boolean,
    quoteText: string,
    quoteAuthor: string,
    highlightText: string,
    videoUrl: string,
    videoCaption: string,
    videoCover?: Image.AsObject,
    videoTitle: string,
    dropdownTitle: string,
    achievementGame: string,
    achievementGold: number,
    achievementSilver: number,
    achievementBronze: number,
    title: string,
    subTitle: string,
    link: string,
  }
}

export class ImageCrop extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getOffsetX(): number;
  setOffsetX(value: number): void;

  getOffsetY(): number;
  setOffsetY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageCrop.AsObject;
  static toObject(includeInstance: boolean, msg: ImageCrop): ImageCrop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageCrop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageCrop;
  static deserializeBinaryFromReader(message: ImageCrop, reader: jspb.BinaryReader): ImageCrop;
}

export namespace ImageCrop {
  export type AsObject = {
    width: number,
    height: number,
    offsetX: number,
    offsetY: number,
  }
}

export class Image extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  hasCrop(): boolean;
  clearCrop(): void;
  getCrop(): ImageCrop | undefined;
  setCrop(value?: ImageCrop): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    source: string,
    crop?: ImageCrop.AsObject,
  }
}

export interface TypeMap {
  TEXT: 0;
  IMAGE: 1;
  QUOTE: 2;
  HIGHLIGHT: 3;
  VIDEO: 4;
  CLASSIFICATION: 5;
  ACHIEVEMENT: 6;
  PROFILE: 7;
}

export const Type: TypeMap;

