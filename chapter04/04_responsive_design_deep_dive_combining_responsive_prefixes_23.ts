// Snippet 23 from Chapter 4
// Section: Responsive Design Deep Dive
// Subsection: Combining Responsive Prefixes
// Language: typescript
// Description: function ResponsiveLayout(): JSX.Element {
// 
function ResponsiveLayout(): JSX.Element {
    return (
        <div className="
            container mx-auto p-4
            lg:flex lg:space-x-8 /* Apply flex layout only on large screens and up */
        ">
            <aside className="
                w-full         /* Full width by default (mobile) */
                lg:w-1/4       /* 1/4 width on large screens and up */
                bg-gray-200 p-4 rounded mb-4 lg:mb-0 /* Basic styling */
            ">
                Sidebar
            </aside>
            <main className="
                w-full         /* Full width by default (mobile) */
                lg:w-3/4       /* 3/4 width on large screens and up */
                bg-white p-4 rounded
            ">
                Main Content
            </main>
        </div>
    );
}