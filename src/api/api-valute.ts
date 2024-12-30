import axios, {AxiosResponse} from "axios";

interface ValuteData {
    CharCode: string;
    ID: string;
    Name: string;
    Nominal: number;
    NumCode: string;
    Previous: number;
    Value: number;
}

interface CbrData {
    Valute: {
        [key: string]: ValuteData;
    };
}

export async function getCurrentExValutes(): Promise<number> {
    const response: AxiosResponse<CbrData> = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
    return Number(response.data.Valute.USD.Value.toFixed(2));
}