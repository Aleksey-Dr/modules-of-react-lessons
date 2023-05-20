import { Formik, Form, Field } from 'formik';

const MaterialEditionForm = ({ onSubmit, isSubmitting }) => {

    const handleSubmit = async (values, actions) => {
        await onSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ title: '', link: '' }}
            onSubmit={ handleSubmit }
        >
            {({isSubmitting}) => (
                <Form>
                    <label>
                        Description
                        <Field name="title" type="text" />
                    </label>
                    <label>
                        Link
                        <Field name="link" type="text" />
                    </label>
                    <button type="submit" disabled={isSubmitting} >Add material</button>
                </Form>
            )}
        </Formik>
    );
};

export default MaterialEditionForm;