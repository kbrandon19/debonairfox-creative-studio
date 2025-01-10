import { Image } from "sanity";

export interface Services{
    servicesDescription: servArr[];
}

export interface servArr{
    serviceTitle:string;
    // serviceInfo: Block[];
    serviceInfo: string;
    // serviceInfoTest:string;
    servicesKeyword:keywordArr[];
    serviceLink:string;
}

export interface keywordArr{
  keyword:string;
}

//Block
export interface Block {
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }>;
    markDefs: Array<{
      _key: string;
      _type: string;
      [key: string]: any; // You can define specific fields if known
    }>;
    style: string;
    [key: string]: any; // To handle any additional fields that might be present
  }