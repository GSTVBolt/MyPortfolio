import Link from "next/link"

export const NavLink = ({ href, title }: any) => {
    return (
        <Link href={href} className="text-slate-200 font-semibold block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-[#ADB7BE]"
        >
            {title}
        </Link>
    )
}