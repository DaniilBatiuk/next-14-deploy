import Translation from "@/app/(models)/translate";
import { ITest, ITranslations } from "@/services/dictionary.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const rawTranslationData = (await Translation.find()).reverse();

    const res = JSON.parse(JSON.stringify(rawTranslationData)) as ITranslations[];

    console.log("Translation got all");
    return NextResponse.json({ res: res });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ res: [] });
  }
}

export async function POST(req: Request) {
  const { word, translations } = await req.json();
  console.log(word, translations);
  if (!translations) {
    try {
      const rawTranslationData = await Translation.findOne({
        word: word,
      });
      if (!rawTranslationData) {
        return NextResponse.json({ message: "no" });
      } else {
        return NextResponse.json({ message: "Ok" });
      }
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "error" });
    }
  } else {
    try {
      await Translation.create({ word, translations });
      return NextResponse.json({ message: "Ok" });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "error" });
    }
  }
}
