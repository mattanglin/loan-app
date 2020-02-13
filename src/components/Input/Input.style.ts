const style = {
  marginBottom: 16,

  '& label': {
    display: 'block',
    marginBottom: 8,
    fontWeight: 500,
  },

  '& input': {
    width: '100%',
    lineHeight: 2,
    fontSize: 16,
    borderRadius: 4,
    outline: 'none',
    border: '1px solid rgba(0,0,0, 0.5)',
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 8,
    appearance: 'textfield' as 'textfield',
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      appearance: 'none' as 'none',
    },
  },

  '& .error': {
    height: '1em',
    color: 'red',
  }
};

export default style;
