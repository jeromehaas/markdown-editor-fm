import { Icon } from 'components/01-atoms/icon/icon';

const TextInput = ({ className, label, value, onClick, onChange, readOnly }) => {

  return (

    <div className={`text-input ${className ? className : ''}`} onClick={onClick} >
      <Icon symbol="file" className="text-input__icon icon--white icon--file" />
      <label className="text-input__label">{label ? label : ''}</label>
      <input type="text" className="text-input__input" spellCheck={false} value={readOnly && value.length > 17 ? value.substring(0, 20) + '...' : value} onChange={onChange} readOnly={readOnly} />
    </div >
  )

};

export {
  TextInput
};