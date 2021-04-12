import getFieldsParamsWithNoValidations from '../fieldsControl/getFieldsParamsWithNoValidations';

/**
 * TODO: Add JSDocs
 *
 */

const apiEmail = (
  baseApi,
  _id,
  feedbackCb,
  token,
  closeSpeedDial,
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
    feedbackCb('Campo e-mail não encontrado ou não preenchido', 'error');
    return;
  }

  /**
   * API url
   *
   */

   const apiPath = `${baseApi}/send-confirmation-email`;

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
       email_to: emailTo,
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
