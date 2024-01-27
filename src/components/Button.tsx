export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

// Reusable styled button with a primary and secondary variant, could add others like 'error' and 'warning' if needed
const Button: React.FC<IButton> = ({ variant = 'primary', ...props }) => {
  const buttonClasses = () => {
    const commonClasses =
      'border hover:shadow-md p-4 text-center rounded-md duration-300 transition-all';

    switch (variant) {
      case 'primary':
        return `bg-transparent text-white hover:brightness-125 border-gold 
          disabled:bg-neutral-500 disabled:border-neutral-500 ${commonClasses} ${
            props.className ?? ''
          }`;
      case 'secondary':
        return `border-primary text-primary disabled:border-neutral-500
          disabled:text-neutral-500 ${commonClasses} ${props.className ?? ''}`;
    }
  };

  return (
    <button {...props} className={buttonClasses()}>
      {props.children}
    </button>
  );
};

export default Button;
