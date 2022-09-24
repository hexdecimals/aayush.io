import { Fragment, useRef, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import IGetPostByQuery from '@/interface/IGetPostByQuery';
import Link from 'next/link';
import matter from 'gray-matter';

export default function Search() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm);
      if (searchTerm.length > 4) {
        fetch(`/api/search?q=${searchTerm}`)
          .then((res) => res.json())
          .then((data) => {
            setResults(data);
            setLoading(false);
          });
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <>
      <button
        type="button"
        className="w-full rounded-lg border border-slate p-4 text-left"
        onClick={() => setOpen(true)}
        ref={cancelButtonRef}
      >
        Search
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-main bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-secondary text-left shadow-xl transition-all">
                  <input
                    className="w-full border-b border-slate bg-transparent p-4 text-left"
                    placeholder="Search blog posts"
                    type="text"
                    //onChange={handleChange}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  <ul className="space-y-2 p-4">
                    {results &&
                      !isLoading &&
                      results.map(
                        ({
                          node,
                        }: {
                          node: { id: string; body: string; title: string };
                        }) => (
                          <Link
                            href={'/blog/' + matter(node.body).data.slug}
                            key={node.id}
                          >
                            <li className="cursor-pointer rounded-lg border border-slate bg-slate px-4 py-2">
                              {node.title}
                            </li>
                          </Link>
                        )
                      )}
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
