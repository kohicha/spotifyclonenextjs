import Link from "next/link";

export default function Section({SectionTitle, SectionContents, HeaderSize, layoutStyle, numCards, isHidden}) {
  let tags = Array.from({length: `${numCards}`}, (i) => i + 1);
  const list = tags.map((tag)=>(
    <div key={tag}>
      {SectionContents}
    </div>
  ))
  return (
    <div className="text-white font-bold mb-6">
      <div className="flex flex-row justify-between">
        <p className={`${HeaderSize} mb-6`}>
              {SectionTitle}
          </p>
        <Link href={""} className={`${isHidden} text-sm text-fontGray hover:underline`}>
          Show all
        </Link>
      </div>
        <div className={layoutStyle}>
          {list}
        </div>
    </div>
  )
}
