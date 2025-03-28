import { useProductStore } from '@/storage/ProductStore'
import steps from '@/types/purchaseStages'

export function PurchaseProccess() {
  const { status } = useProductStore() // Получаем текущий статус из хранилища

  const getStepClass = (stepId: string) => {
    const stepIndex = steps.findIndex((step) => step.id === stepId)
    const currentIndex = steps.findIndex((step) => step.id === status)

    if (stepIndex < currentIndex) return 'step step-primary' // Пройденные шаги
    if (stepIndex === currentIndex) return 'step step-primary' // Текущий шаг
    return 'step' // Будущие шаги
  }

  return (
    <div className="md:text-center">
      <ul className="steps md:items-center md:gap-3 md:mb-10 steps-vertical sm:steps-horizontal">
        {steps.map((step) => (
          <li key={step.id} className={getStepClass(step.id)}>
            {step.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PurchaseProccess
