const Comparison = () => {
    return (
        <>
            <div className="landingPagePadx py-5 md:py-10">
                <div className="text-center uppercase app-text-primary">Benefits</div>
                <h2 className="text-center">Why Choose Portfoliia?</h2>
                <div className="overflow-x-auto mt-5">
                    <table className="min-w-full bg-white border border-gray-200 table table-zebra">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-xl font-bold"><span className="app-text-primary">With Portfolia</span></th>
                                <th className="px-4 py-2 text-left text-xl font-bold text-red-500">Without Portfolia</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="bg-gray-50">
                                <td className="px-4 py-2">Instant portfolio and resume generation</td>
                                <td className="px-4 py-2">Manual creation of portfolios and resumes</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Save time with automatic formatting</td>
                                <td className="px-4 py-2">Spend hours formatting documents manually</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="px-4 py-2">Built-in analytics to track employer interactions</td>
                                <td className="px-4 py-2">No insights into resume performance</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">SEO optimization for increased online visibility</td>
                                <td className="px-4 py-2">Poor online visibility and discoverability</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="px-4 py-2">Easy updates and edits with CMS platform</td>
                                <td className="px-4 py-2">Difficult to keep portfolios and resumes updated</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Live links for easy sharing</td>
                                <td className="px-4 py-2">Reliance on static, hard-to-share documents</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="px-4 py-2">Google indexing for better search engine rankings</td>
                                <td className="px-4 py-2">Unindexed portfolios and resumes</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Professional PDF downloads</td>
                                <td className="px-4 py-2">Limited options for high-quality PDF exports</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="px-4 py-2">User-friendly interface</td>
                                <td className="px-4 py-2">Complex and time-consuming manual processes</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Increased chances of getting noticed by recruiters</td>
                                <td className="px-4 py-2">Lower visibility to potential employers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Comparison