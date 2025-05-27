export default function Home() {
  const title = 'Welcome COSCI'
  const currebtYear = <p>2025</p>
  const isShow = true;
  return (
    <div>
      <p>{title.toUpperCase()}</p>
      {currebtYear}
      {
        isShow && <p>Date: 10/10/1998</p>
      }
      {
        isShow ? <p>Hello Next.js</p> : <p>Hello JS</p>
      }
    </div>
  );
}
