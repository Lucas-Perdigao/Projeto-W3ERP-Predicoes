import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Select.module.scss'

const Select = ({
  placeholder,
  name,
  value,
  onChange,
  icon,
  selectOptions,
  customClassName,
}) => (
  <div className={classNames(styles.selectContainer, customClassName)}>
    <div className={styles.inputAndIconContainer}>
      <div className={styles.icon}>{icon}</div>
      <select
        name={name}
        placeholder={placeholder}
        className={styles.select}
        onChange={onChange}
        value={value}
      >
        <option value=' '>{placeholder}</option>
        {selectOptions.map(option => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  </div>
)

Select.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  customClassName: PropTypes.string,
}

Select.defaultProps = {
  placeholder: '',
  name: '',
  value: null,
  onChange: () => {},
  icon: null,
  customClassName: '',
}

export default Select