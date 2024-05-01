import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export default function TableHeading({
    name = "",
    fieldName = "",
    sortChanged = (fieldName: string) => { },
}) {
    return (
        <th onClick={(e) => sortChanged(fieldName)}>
            <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                <div className="flex items-center">
                    {name}
                    <div>
                        <ChevronUpIcon className="w-4" />
                        <ChevronDownIcon className="w-4 -mt-2" />
                    </div>
                </div>
            </div>
        </th>
    );
}