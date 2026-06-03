import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начинается работа над проектом?",
    answer:
      "Всё начинается с бесплатной консультации: я узнаю о вашем пространстве, стиле жизни, пожеланиях и бюджете. После этого готовлю техническое задание и коммерческое предложение.",
  },
  {
    question: "Сколько времени занимает дизайн-проект?",
    answer:
      "Сроки зависят от площади и сложности. Типичная квартира — от 3 до 6 недель. Загородный дом — от 6 до 12 недель. Я заранее обговариваю сроки и придерживаюсь их.",
  },
  {
    question: "Работаете ли вы с небольшими бюджетами?",
    answer:
      "Да. Я подбираю решения под ваш бюджет: предлагаю российские аналоги, нахожу выгодных поставщиков и расставляю приоритеты так, чтобы результат был красивым и доступным.",
  },
  {
    question: "В каких стилях вы работаете?",
    answer:
      "Моя специализация — минимализм, эко-стиль и современный дизайн. Это три направления, в которых я создаю наиболее выразительные и гармоничные интерьеры.",
  },
  {
    question: "Вы работаете только в Москве?",
    answer:
      "Работаю по всей России. Выезд на объект возможен в большинстве городов. Для удалённых проектов веду всё онлайн — это удобно и не влияет на качество.",
  },
  {
    question: "Что входит в полный дизайн-проект?",
    answer:
      "Планировочное решение, 3D-визуализация, спецификация материалов и мебели, рабочие чертежи для строителей и авторский надзор за реализацией.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}