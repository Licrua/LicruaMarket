function PurchaseProccess() {
  return (
    <div className="text-center">
      <ul className="steps items-center  gap-3 mb-10 steps-horizontal">
        <li className="step step-primary">Зарегистрироваться</li>
        <li className="step step-primary">Выбор товара</li>
        <li className="step">Оплата</li>
        <li className="step">Получение товара</li>
      </ul>
      {/* <div
        className="radial-progress"
        style={{ '--value': 30, '--size': '3rem' }}
        role="progressbar"
      >
        70%
      </div> */}
    </div>
  )
}

export default PurchaseProccess
