import RegistrationForm from '@/components/RegistrationForm';

export default function RegisterSection() {
  return (
    <section className="section section--alt" id="register" aria-labelledby="register-title">
      <div className="container">
        <h2 id="register-title">Регистрация</h2>
        <p className="section__lead">
          Выберите формат участия и заполните заявку. Заявки на офлайн-участие проверяет организатор, а онлайн-участники сразу появляются в списке участников.
        </p>
        <p>Поля без пометки «необязательно» нужно заполнить.</p>
        <RegistrationForm />
      </div>
    </section>
  );
}
