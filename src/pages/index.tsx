import { Header } from '@/components/Header'
import Head from 'next/head'
import Image from "next/image"
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Купить Apple Watch Series 8 в Juni</title>
        <meta name='description' content="Купить умные часы Apple Watch Series 8 в Juni. Скидки. Доставка по РБ и Минску" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon/16x16.ico" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon/32x32.ico" />
        <link rel="icon" type="image/x-icon" sizes="96x96" href="/favicon/48x48.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.watch}>
          <section className={styles.watchInfo}>
            <h1 className={styles.pageTitle}>Купите Apple Watch Series 8 в Juni!</h1>
            <p>Не упустите возможность приобрести Apple Watch Series 8 в магазине Juni и открыть для себя новый уровень комфорта, заботы о здоровье и продуктивности прямо сейчас!</p>
            <div className={styles.buyContainer}>
              <a className={styles.buyButton} href="https://forms.gle/Te15WmsYY3s6TwNs7" >Купить</a>
              <p>1499 рублей</p>
            </div>
          </section>
          <img src="/apple-watch.png" className={styles.watchImage} alt="apple watch" />
        </section>
        <section className={styles.buyReasons}>
          <h2>Почему стоит купить Apple Watch именно у нас?</h2>
          <ul>
            <li>Оригинальная техника завезенная из ОАЭ(Дубай), Японии, США и Сингапура</li>
            <li>Только новая техника, в нашем магазине полностью отсутствует восстановленные экземпляры</li>
            <li>Честная работа, клиент оплачивает заказ только после его получения и проверки на подлинность</li>
            <li>Доставка по Минску в максимально ближайшее время, либо по почте</li>
          </ul>
        </section>
        <section className={styles.tech}>
          <h2>Характеристики</h2>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Размер корпуса:</td>
                <td>45 мм</td>
              </tr>
              <tr>
                <td>Материал корпуса:</td>
                <td>Алюминий</td>
              </tr>
              <tr>
                <td>Материал браслета:</td>
                <td>Силикон</td>
              </tr>
              <tr>
                <td>Цвет:</td>
                <td>Midnight</td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer className={styles.contacts}>
          <p>Telegram: Whatislove Jaba</p>
        </footer>
      </main>
    </>
  )
}
