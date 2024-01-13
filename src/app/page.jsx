import Image from 'next/image'
import style from './home.module.css'

export default function HomePage() {
  return (
    <div className={`${style.container}`}>
      <div className={style.textContainer}>
        <h1 className='text-5xl font-semibold'>Create Thoughts Agency.</h1>
        <p className='text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ullam voluptatum temporibus dolorem
          in magni enim explicabo reprehenderit rem molestias.
        </p>
        <div className={style.buttons}>
          <button className={style.button}>Learn more</button>
          <button className={style.button}>Content</button>
        </div>
        <div className={style.brands}>
          <Image src="/brands.png" alt='' fill className={style.brand} />
        </div>
      </div>
      <div className={style.imgContainer}>
        <Image src="/hero.gif" fill />
      </div>
    </div>
  )
}
