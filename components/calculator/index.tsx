import styles from './index.module.css';
import React, { useState } from 'react'
import Button from '@/components/button';

type CalculatorProps = {
  content: any;
  userName: string;
  setUserName: any;
};

const Calculator: React.FunctionComponent<CalculatorProps> = (props) => {
  const { content, userName, setUserName } = props;

  const [weightValue, setWeight] = useState('')
  const [heightValue, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [bmiOldMetric, setBmiOldMetric] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [gender, setGender] = useState(0);

  const handleChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handleFormReset = () => {
    setMessage('');
    setError('');
    setWeight('');
    setHeight('');
  }

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    let weight = parseInt(weightValue);
    let height = parseInt(heightValue);

    if (weight == 0 || height == 0) {
      setError(content.error)
    } else {
      // TODO: and different calculation for male/female
      let bmi = (weight * 1.3 / (Math.pow(height / 100, 2.5)));
      setBmi(bmi.toFixed(1));

      let bmiOldMetric = (weight / (Math.pow(height / 100, 2)));
      setBmiOldMetric(bmiOldMetric.toFixed(1));

      // Logic for message
      /* https://www.meinrechner.net/gesundheit/bmi-rechner/neuer-bmi-rechner
        Krankhaft untergewichtig	0 – 14,9
        Deutlich untergewichtig	15 – 17,9
        Leicht untergewichtig	18 – 18,9
        Normalgewicht	19 – 24,9
        Leicht übergewichtig	25,0 – 29,9
        Deutlich übergewichtig	30,0 – 34,9
        Stark fettleibig	35,0 – 39,9
        Krankhaft übergewichtig	40,0 oder mehr
        */

      if (bmi < 18.9) {
        setMessage(content.resultUnder)
      } else if (bmi >= 19 && bmi < 24.9) {
        setMessage(content.resultNormal)
      } else {
        setMessage(content.resultOver)
      }

      setError('');
    }
  }

  const setMale = () => setGender(2);
  const setFemale = () => setGender(1);

  return (

    <div id={content.id} className={`row ${styles.container}  ${gender === 2 ? styles.male : ""} ${gender === 1 ? styles.female : ""}`}>
      <form onSubmit={handleSubmit} className={styles.calculator} onReset={handleFormReset}>
        <h2 className={styles.headline}>
          {content.title}
        </h2>

        {error &&
          <p className={styles.error}>{error}</p>
        }
        <div>
          <input type="radio" name="gender" value="2" id="male" onChange={setMale} />
          <label htmlFor="male">{content.labelMale}</label>
        </div>
        <div>
          <input type="radio" name="gender" value="1" id="female" onChange={setFemale} />
          <label htmlFor="female">{content.labelFemale}</label>
        </div>

        <div>
          <label htmlFor="weightValue" className={styles.label}>
            {content.labelWeight} <small>{content.labelWeightUnit}</small>
          </label>
          <input className={styles.input} name="weightValue" type="number" value={weightValue} required onChange={(e) => setWeight(e.target.value || '')} />
        </div>

        <div>
          <label htmlFor="heightValue" className={styles.label}>
            {content.labelHeight} <small>{content.labelHeightUnit}</small>
          </label>
          <input className={styles.input} name="heightValue" type="number" value={heightValue} required onChange={(e) => setHeight(e.target.value || '')} />
        </div>

        <div>
          <p>
            {content.info}
          </p>
          <label htmlFor="male" className={styles.label}>{content.firstName}</label>
          <input autoComplete="given-name" className={styles.input} type="text" name="userName" id="userName" defaultValue={userName} onChange={handleChange} />
        </div>

        <div className={styles.btnWrapper}>
          <Button theme='primary' type="submit" buttonLabel={content.submit} />
          <Button theme='secondary' type="reset" buttonLabel={content.reset} />
        </div>

        <div className={`${styles.result} ${message === "" ? styles.hide : ""}`}>
          <h3>{content.result} {bmi}</h3>
          <p>{message}</p>
          <p>{content.oldMetric} {bmiOldMetric}</p>
        </div>
      </form>
    </div>

  );
}

export default Calculator;