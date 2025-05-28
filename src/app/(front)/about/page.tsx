import Contact01Page from "@/components/contact-01/contact-01";

export default async function About() {
    const data = await fetch('https://api.codingthailand.com/api/version',{next: {revalidate: 3600}})//ดึงข้อมูลอีกครั้งใน 1 ชม.ครั้งหน้า Cache
    const apiInfo = await data.json()
    return (
        <>
            {
            apiInfo && <Contact01Page version={apiInfo.data.version} />
            }
        </>
    )
}