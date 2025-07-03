export default function Header() {
    return (
        <header className="w-full flex justify-center">
            <div className="w-[167px] h-[67px] bg-transparent rounded-[0px_0px_10px_10px] overflow-hidden bg-[linear-gradient(90deg,rgba(0,32,51,1)_0%,rgba(48,6,63,1)_100%)] flex items-center justify-center">
                <div className="font-text-body-2 font-[number:var(--text-body-2-font-weight)] text-[#edeef2] text-[length:var(--text-body-2-font-size)] tracking-[var(--text-body-2-letter-spacing)] leading-[var(--text-body-2-line-height)] whitespace-nowrap [font-style:var(--text-body-2-font-style)]">
                    Robert López
                </div>
            </div>
        </header>
    )
}