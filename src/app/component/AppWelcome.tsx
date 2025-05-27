'use client'

export default function AppWelcome() {
  const title = 'Welcome COSCI'
  const currebtYear = <p>2025</p>
  const isShow = true;
  const handleClick = () => {
    alert('Hello Typescipt');
  }

  return (
    <div>
      <p>{title.toUpperCase()}</p>
      <button className="bg-blue-700 p-3 m-3 text-white rounded-lg" onClick={handleClick}>กดได้เลย!</button>
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
