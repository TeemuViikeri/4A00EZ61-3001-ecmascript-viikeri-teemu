const isPositiveInteger = (value, onSuccess, onError) => { value >= 0 ? onSuccess() : onError() }

isPositiveInteger(-5,
  () => console.log('POSITIVE'),
  () => console.log('NOT POSITIVE')
)
