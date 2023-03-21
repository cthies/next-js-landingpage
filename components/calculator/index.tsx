import styles from './index.module.css';
import { useState } from "react"
import Button from '@/components/button';

type CalculatorProps = {
  content: any;
  userName: string;
  setUserName: any;
  goal: string;
  setGoal: any;
};

const Calculator: React.FunctionComponent<CalculatorProps> = (props) => {
  const { content, userName, setUserName, goal, setGoal } = props;

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');
  const [error, setError] = useState('');
  const [gender, setGender] = useState(0);

  const handleFormReset = () => {
    setBmiCategory('');
    setError('');
    setWeight('');
    setHeight('');
  }

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    //parseContent from text input
    let heightValue = Number(height);
    let weightValue = Number(weight);

    if (weight && height && (weightValue < 40 || heightValue < 110)) {

      setError(content.error);

    } else {

      const heightInMeters = heightValue / 100;
      const bmiResult = weightValue / (heightInMeters * heightInMeters);
      setBMI(bmiResult.toFixed(2));

      if (bmiResult < 18.5) {
        setBmiCategory(content.resultUnder);
      } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
        setBmiCategory(content.resultNormal);
      } else if (bmiResult >= 25 && bmiResult <= 29.9) {
        setBmiCategory(content.resultOver);
      } else {
        setBmiCategory(content.resultObese);
      }

      setError('');
    }
  }

  const setMale = () => setGender(2);
  const setFemale = () => setGender(1);

  const handleGoal = (event: { target: { value: any; }; }) => {
    let name = event.target.value;
    localStorage.setItem('nextjs-bmi-goal', name);
    setGoal(name);
  }

  const handleName = (event: { target: { value: any; }; }) => {
    let name = event.target.value;
    localStorage.setItem('nextjs-bmi-username', name);
    setUserName(name);
  }

  return (

    <div id={content.id} className={`row ${styles.container}  ${gender === 2 ? styles.male : ""} ${gender === 1 ? styles.female : ""}`}>
      <form onSubmit={handleSubmit} className={styles.calculator} onReset={handleFormReset}>
        <h2 className={styles.headline}>
          {content.title}
        </h2>

        {error &&
          <p className={styles.error}>{error}</p>
        }
        <fieldset className={`radio-button-container ${styles.fieldset}`}>
          <legend>{content.genderInfo}</legend>
          
          <input type="radio" name="gender" value="1" id="female" onChange={setFemale} />
          <label htmlFor="female">{content.labelFemale}</label>

          <input type="radio" name="gender" value="2" id="male" onChange={setMale} />
          <label htmlFor="male">{content.labelMale}</label>

        </fieldset>

        <div>
          <label htmlFor="weight" className={styles.label}>
            {content.labelWeight} <small>{content.labelWeightUnit}</small>
          </label>
          <input className={styles.input} name="weight" type="number" value={weight} required onChange={(e) => setWeight(e.target.value)} />
        </div>

        <div>
          <label htmlFor="height" className={styles.label}>
            {content.labelHeight} <small>{content.labelHeightUnit}</small>
          </label>
          <input className={styles.input} name="height" type="number" value={height} required onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div>
          <p>
            {content.info}
          </p>
          <fieldset className={`radio-button-container ${styles.fieldset}`}>
            <legend>{content.labelGoal}:</legend>
            <input type="radio" name="goal" value="1" id="healthyLiving" checked={goal === '1' ? true : false} onChange={handleGoal} />
            <label htmlFor="healthyLiving">{content.goalHealth}</label>

            <input type="radio" name="goal" value="2" id="weightLoss" checked={goal === '2' ? true : false} onChange={handleGoal} />
            <label htmlFor="weightLoss">{content.goalWeightLoss}</label>
          </fieldset>

          <label htmlFor="male" className={styles.label}>{content.firstName}</label>
          <input autoComplete="given-name" className={styles.input} type="text" name="userName" id="userName" defaultValue={userName} onChange={handleName} />
        </div>

        <div className={styles.btnWrapper}>
          <Button theme='primary' type="submit" buttonLabel={content.submit} />
          <Button theme='secondary' type="reset" buttonLabel={content.reset} />
        </div>

        <div className={`${styles.result} ${bmiCategory === "" ? styles.hide : ""}`}>
          <h3>{content.result} {bmi}</h3>
          <p>{content.resultCategory} {bmiCategory}</p>
        </div>
      </form>
    </div>

  );
}

export default Calculator;