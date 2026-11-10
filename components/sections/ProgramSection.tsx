import { program } from '@/data/conference';

function timeValue(date: string, time: string): string {
  return `${date}T${time}+05:00`;
}

export default function ProgramSection() {
  return (
    <section className="section section--alt" id="program" aria-labelledby="program-title">
      <div className="container">
        <h2 id="program-title">Программа</h2>
        <p className="section__lead">Время указано по Алматы (UTC+5).</p>

        {program.map((day) => (
          <div key={day.id}>
            <h3>
              {day.dayTitle}, <time dateTime={day.date}>{day.dateLabel}</time>
            </h3>
            <div className="table-scroll" role="region" aria-labelledby={`${day.id}-caption`} tabIndex={0}>
              <table className="schedule">
                <caption id={`${day.id}-caption`}>{day.caption}</caption>
                <thead>
                  <tr>
                    <th scope="col">Время</th>
                    <th scope="col">Доклад</th>
                    <th scope="col">Спикер</th>
                    <th scope="col">Трек</th>
                  </tr>
                </thead>
                <tbody>
                  {day.items.map((item) => (
                    <tr className={item.speaker ? undefined : 'schedule__pause'} key={item.start}>
                      <th scope="row">
                        <time dateTime={timeValue(day.date, item.start)}>{item.start}</time>–
                        <time dateTime={timeValue(day.date, item.end)}>{item.end}</time>
                      </th>
                      {item.speaker ? (
                        <>
                          <td>{item.title}</td>
                          <td>{item.speaker}</td>
                          <td>{item.track}</td>
                        </>
                      ) : (
                        <td colSpan={3}>{item.title}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
