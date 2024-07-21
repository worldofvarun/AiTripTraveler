import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button.jsx";
import AutoComplete from "react-google-autocomplete";


function CreateTripForm({onSubmit, isLoading}) {


    const {handleSubmit, register, watch, setValue} = useForm();
    const budgetWatch = watch('budgetType');
    const tripWatch = watch('tripWith');
    const trip_with = [
        { label: "solo", emoji: "🧍" },
        { label: "couple", emoji: "👫" },
        { label: "family", emoji: "👨‍👩‍👧‍👦" },
        { label: "friend", emoji: "👫" }
    ];

    function onSubmitHandler(data){
        if(tripWatch === 'solo') return onSubmit({...data, numPeople: '1'});
        if(tripWatch === 'couple') return onSubmit({...data, numPeople: '2'});
        return onSubmit(data);

    }

    return (
        <form className={'flex flex-col gap-4'} onSubmit={handleSubmit( data => onSubmitHandler(data))}>
            <Label htmlFor={'from'}>
                where your trip start from?
                <AutoComplete
                    className="shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md px-3 py-2 w-full mt-2"
                    apiKey={import.meta.env.VITE_GOOGLE_PLACES_API} required
                    onPlaceSelected={(place) => setValue('from',place.formatted_address)}/>
            </Label>


            <Label htmlFor={'to'}>
                what is destination of choice?
                <AutoComplete
                    className="shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md px-3 py-2 w-full mt-2"
                    apiKey={import.meta.env.VITE_GOOGLE_PLACES_API} required
                    onPlaceSelected={(place) => setValue('to',place.formatted_address)}/>
            </Label>

            <Label htmlFor={'numDays'}>
                How many days are you planning your trip?
                <Input id={'to'} type={'number'} className={'mt-2'}
                       placeholder={'ex: 3'} {...register('numDays', {required: 'please enter this field'})}/>
            </Label>

            <div className={' flex flex-col gap-2'}>
                <Label>What is your Budget Type?</Label>
                <div className={'grid grid-cols-3 gap-2'}>
                    {['💵 cheap', '💰 moderate', '💸 luxury'].map((mode) => (
                        <label
                            className={
                                budgetWatch === mode.split(' ')[1]
                                    ? "cursor-pointer border-2 border-black text-sm rounded px-4 py-2 font-semibold"
                                    : "cursor-pointer border text-sm rounded px-4 py-2 font-semibold"
                            }
                            key={mode}
                        >
                            <input
                                type="radio"
                                value={mode.split(' ')[1]}
                                className="hidden"
                                {...register('budgetType', {required: 'please enter this field'})}
                            />
                            <span>{mode}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className={' flex flex-col gap-2'}>
                <Label>who do you plan on traveling with on your trip?</Label>
                <div className={'grid grid-cols-3 gap-2'}>
                    {trip_with.map(({emoji, label}) => (
                        <label
                            className={
                                tripWatch ===label
                                    ? "cursor-pointer border-2 border-black text-sm rounded px-4 py-2 font-semibold"
                                    : "cursor-pointer border text-sm rounded px-4 py-2 font-semibold"
                            }
                            key={label}
                        >
                            <input
                                type="radio"
                                value={label}
                                className="hidden"
                                {...register('tripWith', {required: 'please enter this field'})}
                            />
                            <span>{emoji} {label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {tripWatch !== 'solo' && tripWatch !== 'couple' && (
                <Label htmlFor={'numDays'}>
                    How many members are in the trip?
                    <Input
                        id={'numPeople'}
                        type={'number'}
                        className={'mt-2'}
                        placeholder={'ex: 3'}
                        {...register('numPeople', { required: 'Please enter this field' })}
                    />
                </Label>
            )}
            <Button type={'submit'} className={'bg-blue-500'} disabled={isLoading}>Create Trip</Button>
        </form>
    );
}

export default CreateTripForm;