import PropTypes from 'prop-types';

export default function Contact({ name, number, onDeleteContact }) {
  return (
    <div>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={onDeleteContact}>
        Delete contact
      </button>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
