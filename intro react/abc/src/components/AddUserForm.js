

const AddUserForm = ({addUser})=> {
    return (
         
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input type="number" name="id" /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Dept</td>
                            <td>
                                <input type="text" name="dept"   /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name="email"  /> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            
    );
}

export default AddUserForm; 