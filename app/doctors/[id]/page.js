import { HomeIcon, PlusIcon, ClockIcon, Calendar1Icon } from "lucide-react";
import { doctors } from "../../libs/data";
import { Button } from '@/components/ui/button';
import { DatePicker } from "../../Compunents/DatePicker";

export default function DoctorDetail({ params }) {
  const DoctorInfo = doctors.find((doctor) => doctor.id == params.id);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          {/* Doctor Image */}
          <img
            alt="doctor"
            className="lg:w-1/2 w-full h-64 lg:h-auto object-cover object-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            src="https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg"
          />

          {/* Doctor Details */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-gray-500 text-sm uppercase font-semibold tracking-wide mb-2">
              {DoctorInfo.category}
            </h2>
            <h1 className="text-gray-900 text-4xl font-bold mb-4">
              {DoctorInfo.name}
            </h1>
            <div className="flex items-center mb-6">
              <span className="text-yellow-400 flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </span>
              <span className="text-gray-600 ml-3">4 Reviews</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn.
            </p>

            {/* Details Section */}
            <div className="space-y-4">
              {[
                { label: "Gender", icon: <HomeIcon />, value: DoctorInfo.gender },
                { label: "Hospital", icon: <PlusIcon />, value: DoctorInfo.hospital },
                { label: "Appointment Time", icon: <ClockIcon />, value: DoctorInfo.appointmentTime },
                { label: "Fees", icon: <ClockIcon />, value: `$${DoctorInfo.fees}` },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-500">{item.icon}</span>
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </div>
                  <span className="text-gray-700">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Appointment Booking */}
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Calendar1Icon className="h-5 w-5 text-indigo-500" />
                  <span className="font-medium text-gray-900">
                    Pick Appointment Date
                  </span>
                </div>
                <DatePicker />
              </div>
              <Button className="w-full bg-gray-600 hover:bg-gray-300 hover:text-black transition-all transition text-white py-3 px-4 rounded-lg shadow-md">
                Book Your Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
