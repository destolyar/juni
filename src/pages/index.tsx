import { Header } from '@/components/Header'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {  
  return (
    <>
      <Head>
        <title>Купить Apple Airpods Pro 2 поколения в Juni</title>
        <meta name='description' content="Купите беспроводные наушники Apple Airpods Pro 2 в интернет-магазине Juni. Специальные скидки и быстрая доставка по всей РБ и Минску." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon/16x16.ico" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon/32x32.ico" />
        <link rel="icon" type="image/x-icon" sizes="96x96" href="/favicon/48x48.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.item}>
          <section className={styles.itemInfo}>
            <h1 className={styles.pageTitle}>Apple Airpods Pro 2 в Juni!</h1>
            <p>Откройте для себя идеальное сочетание звука, комфорта и инноваций с Apple Airpods Pro 2, доступными в магазине Juni. Погрузитесь в мир безупречного восприятия уже сегодня с нашей сверхзвуковой доставкой!</p>
            <div className={styles.buyContainer}>
              <a className={styles.buyButton} href="https://forms.gle/Te15WmsYY3s6TwNs7" >Купить</a>
              <p>759 рублей</p>
            </div>
          </section>
          <img src="/airpods-pro.png" className={styles.itemImage} alt="apple watch" />
        </section>
        <section className={styles.buyReasons}>
          <h2>Почему стоит купить Apple Airpods именно у нас?</h2>
          <ul>
            <li>Эксклюзивные товары из ОАЭ (Дубай), Японии, США и Сингапура - только оригинальная продукция.</li>
            <li>Только новая техника, в нашем магазине полностью отсутствуют восстановленные экземпляры.</li>
            <li>Надёжность и прозрачность: оплата заказа производится после получения и проверки подлинности товара.</li>
            <li>Быстрая доставка: сверхскоростная курьерская служба в Минске и отправка почтой по всей РБ.</li>
            <li>Гарантия 14 дней для проверки на брак. В случае дефектов бесплатно заменим или вернем деньги.</li>
          </ul>
        </section>
        <section className={styles.instruction}>
          <h2>Как приобрести Airpods в нашем интернет-магазине:</h2>
          <ol>
            <li>Нажмите на кнопку "Купить" выше.</li>
            <li>Заполните все данные в форме.</li>
            <li>Подождите пока с вами свяжется наш менеджер для подтверждения заказа.</li>
            <li>После подтверждения ожидайте доставку в ближайшее время!</li>
          </ol>
        </section>
        <section className={styles.tech}>
          <h2>Второе поколение внутриканальных наушников Apple AirPoods Pro:</h2>
          <ul>
            <li>Новый фирменный чип Apple H2</li>
            <li>Улучшенная система активного шумоподавления</li>
            <li>Адаптивный режим прослушивания окружающего звука</li>
            <li>Адаптивный эквалайзер и поддержка пространственного звука Spatial Audio</li>
            <li>Сенсорное управление с регулятором громкости</li>
            <li>Bluetooth версии 5.3</li>
            <li>Поддержка голосового помощника</li>
            <li>Защита от брызг по стандарту IPX4</li>
            <li>Обновленный зарядный кейс со встроенным динамиком и отверстием для ланьярда</li>
            <li>Беспроводная зарядки кейса по стандарту Qi (с поддержкой MagSafe)</li>
            <li>Увеличенное время работы (до 6 часов при полной зарядки с использованием активного шумоподавления)</li>
            <li>Быстрая зарядка (всего 5 минут подзарядки позволит использовать наушники в течении 1 часа)</li>
          </ul>
        </section>
        <footer className={styles.contacts}>
          <p>Telegram: @Whatislove Jaba</p>
        </footer>
      </main>
    </>
  )
}
