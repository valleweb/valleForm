import getFieldsParamsWithNoValidations from '../fieldsControl/getFieldsParamsWithNoValidations';

/**
 * TODO: Add JSDocs
 *
 */

const apiEmail = (
  baseApi,
  customParams = {},
  _id,
  feedbackCb,
  token,
  closeSpeedDial,
  button_id,
  action,
  email,
) => {

  /**
   * -----
   *
   */

  const fields = getFieldsParamsWithNoValidations(_id);

  /**
   * -----
   *
   */

  const fieldsKeys = Object.keys(fields);
  const emailToArray = fieldsKeys.filter(fieldId => fieldId === 'email');
  const emailTo = fields[emailToArray[0]].value;

  /**
   * -----
   *
   */

  if (!emailTo) {
    console.log('d')
    feedbackCb('Campo e-mail não encontrado ou não preenchido', 'error');
    return;
  }

  /**
   * API url
   *
   */

   const apiPath = `${baseApi}/send-email`;

   /**
    * Request configs
    *
    */

   const method = 'POST';

   const headers = new Headers({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
   });

   /**
    * Request data structure
    *
    */

   const body = JSON.stringify({
     evento: {
       ...customParams,
       button_id: button_id,
       action: action,
       email: {
        from: email.from,
        to: emailTo,
        subject: email.subject,
        content: email.content,
      },
     }
   });

   /**
    * HTTP POST
    *
    */

   closeSpeedDial();

   fetch(apiPath, { method, headers, body })
     .then(res => res.json())
     .then(data => {

       /**
        * Request success
        *
        */

       feedbackCb(data.evento.mensagem, 'success');

     })
     .catch(err => {

       /**
        * Request error
        *
        */

       console.log(err);

       feedbackCb('Erro interno no servidor', 'error');

     });

}

export default apiEmail;
