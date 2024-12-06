function AddUser() {
    return (
        <div className='container'>
            <br />
            <div className='row'>
                <div className='card'>
                    <h2 className='text-center'> Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-3'>
                                <label className='form-label'>UserName:</label>
                                <input
                                    type='text'
                                    name='fName'
                                    className='form-control'
                                    placeholder='Please enter username'
                                />
                            </div>

                            <div className='form-group mb-3'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    name='email'
                                    className='form-control'
                                    placeholder='Please enter email'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUser;
