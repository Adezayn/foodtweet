

const Button = (props) => {
  const {children, className, inputHandler} = props
  return (
    <button className={className} onClick={inputHandler}>{children}</button>
  )
}

export default Button;