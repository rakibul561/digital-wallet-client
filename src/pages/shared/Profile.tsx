import { Button } from "@/components/ui/button"
import Loading from "@/loading"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { Mail, Phone, MapPin, User, Edit } from "lucide-react"

const Profile = () => {
  const { data } = useUserInfoQuery(undefined)
  
  const result = data?.data;
  console.log(result)

  if (!data) {
    return <Loading/>
  } 


   const handleSubmit = (data:string) =>{
      console.log("hello world")
      console.log("hello world")
      console.log(data
        
      )
   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Main Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Background */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Profile Image */}
          <div className="relative -mt-16 flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100">
              <img 
                src={result?.image || "/api/placeholder/128/128"} 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/api/placeholder/128/128";
                }}
              />
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="px-6 pb-6 pt-4">
            {/* Name and Role */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {result?.name}
              </h2>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <User className="w-4 h-4 mr-1" />
                {result?.role} Account
              </span>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span className="text-sm break-all">{result?.email}</span>
              </div>
              
              {result?.phone && (
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{result.phone}</span>
                </div>
              )}
              
              {result?.address && (
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                  <span className="text-sm">{result.address}</span>
                </div>
              )}
            </div>
            
            {/* Action Button */}
            <Button onClick={handleSubmit} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              <Edit className="w-4 h-4 mr-2" />
              Update Profile
            </Button>
          </div>
        </div>
        
        {/* Additional Stats or Info Cards */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">100%</div>
              <div className="text-xs text-gray-500 mt-1">Profile Complete</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Active</div>
              <div className="text-xs text-gray-500 mt-1">Account Status</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile