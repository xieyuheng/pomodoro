import { Form, FormValues } from './Form'

type Action<R> = () => Promise<R>

export async function formSubmit<T extends FormValues, R>(
  form: Form<T>,
  event: Event,
  action: Action<R>,
): Promise<R> {
  form.processing = true

  assignValuesFromEvent(event, form.values)

  const result = await action()

  form.processing = false

  return result
}

function assignValuesFromEvent(event: Event, values: FormValues): void {
  const target: any = event.target

  for (const key of Object.keys(values)) {
    if (target.hasOwnProperty(key)) {
      if (target[key].type === 'checkbox') {
        values[key] = target[key].checked
      } else {
        values[key] = target[key].value
      }
    }
  }
}
