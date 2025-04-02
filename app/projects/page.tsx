import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
  {
    name: 'Found',
    description: 'Found is an app that helps raise awareness and prevent human trafficking among teens and young adults. We include a map that shows people who have gone missing in areas close to the user, a report screen which allows users to report suspicious activity to the National Human Trafficking Hotline or local 911 authorities, and a simulation that helps prepare teens and young adults for online trafficking threats. Finally, we include an education page that helps inform users about how to prevent yourself from being trafficked, how to recognize someone who is being trafficked, and other information about human trafficking.',
    screenshot: '/Phone Printable.png',
    link: '#'
  },
  {
    name: 'SaveRight',
    description: 'SaveRight aims to help educate teens and young adults who are unprepared financially for their independent life after high school. Whether it be furthering their education through college/trade school or just living on their own, our app will give teens the opportunity to see the future impact of the financial decisions they are making in their day to day lives.',
    screenshot: '/Phone Printable.png',
    link: '#'
  },
  {
    name: 'Police Maintenance',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    screenshot: '/Phone Printable.png',
    link: '#'
  },
]

export default function Example() {
  return (
    <div className="relative bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projects
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                        <Image
                          src={feature.screenshot}
                          alt=""
                          width={100}
                          height={100}
                          className="mt-10 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg/8 font-semibold tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 mb-5 text-base/7 text-gray-600">{feature.description}</p>
                    <a href={feature.link}>github</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
