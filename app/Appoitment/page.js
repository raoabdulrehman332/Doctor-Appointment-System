import { columns } from "../Compunents/AppointmentTable/columns";
import AppointmentTable from "../Compunents/AppointmentTable/data-table";
import { appointments } from "../libs/data";

export default function Appointments(){

    return(
        <div className="container mx-auto">
            <h1 className="text-4xl my-10">My Appointments</h1>
            <AppointmentTable columns={columns} data={appointments} />
        </div>
    )
}